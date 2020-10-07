import React from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import floorImage from './Floor.png'
import wallImage from './wall.jpg'
import laptop from './out.glb'

const Gallery = () => {
// Set variables
var camera, scene, renderer, controls;
var objects = [];
var raycaster, mouse;
var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;
var prevTime = performance.now();
var velocity = new THREE.Vector3();
var direction = new THREE.Vector3();

function init() {
	// Set up camera view
	camera = new THREE.PerspectiveCamera(
		100,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);
	camera.position.x = 220;
	camera.position.y = 10;
	camera.position.z = 430;

	// Create new scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);
	scene.fog = new THREE.Fog(0xffffff, 0, 750);

	// Add some light
	var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
	light.position.set(0.5, 1, 0.75);
	scene.add(light);

	// Set controls
	controls = new PointerLockControls(camera, document.body);

	// Add controls
	scene.add(controls.getObject());

	// Keyboard functions for controls when pressed down
	var onKeyDown = function (event) {
		switch (event.keyCode) {
			case 38: // up
			case 87: // w
				moveForward = true;
				break;

			case 37: // left
			case 65: // a
				moveLeft = true;
				break;

			case 40: // down
			case 83: // s
				moveBackward = true;
				break;

			case 39: // right
			case 68: // d
				moveRight = true;
				break;

			case 32: // space
				if (canJump === true) velocity.y += 350;
				console.log(
					'x ' +
						camera.position.x +
						' y ' +
						camera.position.y +
						' z ' +
						camera.position.z
				);
				canJump = false;
				break;
			default:
				break;
		}
	};

	// Keyboard functions for controls when released
	var onKeyUp = function (event) {
		switch (event.keyCode) {
			case 38: // up
			case 87: // w
				moveForward = false;
				break;

			case 37: // left
			case 65: // a
				moveLeft = false;
				break;

			case 40: // down
			case 83: // s
				moveBackward = false;
				break;

			case 39: // right
			case 68: // d
				moveRight = false;
				break;
			default:
				break;
		}
	};

	// Set events for when keys are pressed and released
	document.addEventListener('keydown', onKeyDown, false);
	document.addEventListener('keyup', onKeyUp, false);

	// New raycaster object
	raycaster = new THREE.Raycaster(
		new THREE.Vector3(),
		new THREE.Vector3(0, -1, 0),
		0,
		10
	);
	mouse = new THREE.Vector2();

	// Set up the floor
	var geometry = new THREE.PlaneGeometry(500, 500, 0, 0);
	geometry.applyMatrix(new THREE.Matrix4().makeTranslation(250, -250, 0));
	geometry.rotateX(-Math.PI / 2);
	var floorTexture = new THREE.TextureLoader().load(floorImage);
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
	floorTexture.repeat.set(20, 20);
	var floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture });
	var floor = new THREE.Mesh(geometry, floorMaterial);
	scene.add(floor);

	// Map for walls
	let wallArr = [
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		2,
		1,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		2,
		1,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		1,
	];

	// Setting up walls
	const loader = new THREE.TextureLoader();
	for (let x = 0; x < 10; x++) {
		for (let y = 0; y < 10; y++) {
			if (wallArr[10 * x + y] === 1 || wallArr[10 * x + y] === 2) {
				// const loader = new THREE.TextureLoader();
				var wall = new THREE.Mesh(
					new THREE.CubeGeometry(100, 50, 15),
					new THREE.MeshBasicMaterial({
						color: 0x000000,
						map: loader.load(wallImage),
					})
				);
				if (wallArr[10 * x + y] === 2) {
					wall.rotation.y = Math.PI / 2;
					wall.position.set(x * 50, 25, y * 50);
				} else {
					wall.position.set(x * 50, 25, y * 50);
				}
				scene.add(wall);
			}
		}
	}

	// Adding Computer object
	var gltfLoader = new GLTFLoader();
	gltfLoader.load(
		laptop,
		function (gltf) {
			gltf.scene.scale.set(40, 40, 40);
			gltf.scene.position.set(220, 5, 400);
			scene.add(gltf.scene);
		},
		undefined,
		function (error) {
			console.error(error);
		}
	);

	// Create the ceiling
	var ceiling = new THREE.Mesh(
		new THREE.CubeGeometry(500, 500, 10),
		new THREE.MeshBasicMaterial({
			color: 0xffffff,
			map: loader.load(wallImage),
		})
	);
	ceiling.rotateX(-Math.PI / 2);
	ceiling.position.set(250, 50, 250);
	scene.add(ceiling);

	// Set renderer up
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// Check if window size changes
	window.addEventListener('resize', onWindowResize, false);

	// Lock controls when it loads.
	window.onload = function () {
		document.addEventListener('click', onClick, false);
		var blocker = document.getElementById('blocker');
		var instructions = document.getElementById('instructions');
		instructions.addEventListener(
			'click',
			function () {
				controls.lock();
			},
			false
		);

		controls.addEventListener('lock', function () {
			instructions.style.display = 'none';
			blocker.style.display = 'none';
		});

		controls.addEventListener('unlock', function () {
			blocker.style.display = 'block';
			instructions.style.display = '';
		});
	};
}

// Detects what user clicks on
function onClick(event) {
	event.preventDefault();

	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

	raycaster.setFromCamera(mouse, camera);

	var intersects = raycaster.intersectObjects(scene.children, true);

	if (intersects.length > 0) {
		console.log('Intersection:', intersects[0]);
	}
}

// Update vr window if size changes
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

// Renders world and sets default values similar to life on Earth.
function animate() {
	requestAnimationFrame(animate);

	var time = performance.now();

	if (controls.isLocked === true) {
		raycaster.ray.origin.copy(controls.getObject().position);
		raycaster.ray.origin.y -= 10;

		var intersections = raycaster.intersectObjects(objects);

		var onObject = intersections.length > 0;

		var delta = (time - prevTime) / 1000;

		velocity.x -= velocity.x * 10.0 * delta;
		velocity.z -= velocity.z * 10.0 * delta;

		velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

		direction.z = Number(moveForward) - Number(moveBackward);
		direction.x = Number(moveRight) - Number(moveLeft);
		direction.normalize(); // this ensures consistent movements in all directions

		if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
		if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

		if (onObject === true) {
			velocity.y = Math.max(0, velocity.y);
			canJump = true;
		}

		controls.moveRight(-velocity.x * delta);
		controls.moveForward(-velocity.z * delta);

		controls.getObject().position.y += velocity.y * delta; // new behavior

		if (controls.getObject().position.y < 10) {
			velocity.y = 0;
			controls.getObject().position.y = 10;

			canJump = true;
		}
	}

	prevTime = time;

	renderer.render(scene, camera);
}
  	init();
	animate();
    return (
        <div></div>
    )
}

export default Gallery