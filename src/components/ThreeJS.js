import React, { Component } from "react";
import * as THREE from "three";

class ThreeJS extends Component {
    constructor() {
        super();
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();

    }

    componentDidMount() {
        // this.renderer.setClearColorHex();
        this.renderer.setClearColor(new THREE.Color(0x000000));
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;



        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = 150;
        this.camera.lookAt(this.scene.position);

        let geom = new THREE.Geometry();
        let material = new THREE.PointsMaterial({ size: 4, vertexColors: true, color: 0xffffff });

        // this.cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
        // this.cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
        // this.cube = new THREE.Mesh(this.cubeGeometry, this.cubeMaterial);

        let t;

        for (var x = -5; x < 5; x++) {
            for (var y = -5; y < 5; y++) {
                t = x * 2;
                var particle = new THREE.Vector3(t * Math.cos(6 * t), t * Math.sin(6 * t), t);
                geom.vertices.push(particle);
                geom.colors.push(new THREE.Color(Math.random() * 0x00ffff));

                // this.sprite = new THREE.Sprite(material);
                // this.sprite.position.set(x * 10, y * 10, 0);
                // this.scene.add(this.sprite);
            }
        }

        var cloud = new THREE.PointCloud(geom, material);
        this.scene.add(cloud);


        document.getElementById("root").appendChild(this.renderer.domElement);
        requestAnimationFrame(this.rendering);
        this.renderer.render(this.scene, this.camera);
    }

    rendering() {
    }

    render() {
        return <div></div>;
    }
}

export default ThreeJS;
