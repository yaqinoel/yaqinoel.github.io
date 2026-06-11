import fs from 'node:fs';
import path from 'node:path';
import * as THREE from 'three';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';

const [, , inputPath, outputPath, requestedCount = '12000'] = process.argv;

if (!inputPath || !outputPath) {
  console.error('Usage: node scripts/generate-particle-model.mjs <input.ply> <output.bin> [count]');
  process.exit(1);
}

const count = Number.parseInt(requestedCount, 10);

if (!Number.isFinite(count) || count <= 0) {
  throw new Error(`Invalid particle count: ${requestedCount}`);
}

const source = fs.readFileSync(inputPath);
const arrayBuffer = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength);
const geometry = new PLYLoader().parse(arrayBuffer);
geometry.computeVertexNormals();

const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial());
mesh.updateMatrixWorld(true);

const sampler = new MeshSurfaceSampler(mesh).build();
const point = new THREE.Vector3();
const positions = new Float32Array(count * 3);
const bounds = new THREE.Box3();

for (let index = 0; index < count; index += 1) {
  sampler.sample(point);
  const offset = index * 3;
  positions[offset] = point.x;
  positions[offset + 1] = point.y;
  positions[offset + 2] = point.z;
  bounds.expandByPoint(point);
}

const center = bounds.getCenter(new THREE.Vector3());
const size = bounds.getSize(new THREE.Vector3());
const scale = 2.25 / Math.max(size.x, size.y, size.z);

for (let index = 0; index < positions.length; index += 3) {
  positions[index] = (positions[index] - center.x) * scale;
  positions[index + 1] = (positions[index + 1] - center.y) * scale;
  positions[index + 2] = (positions[index + 2] - center.z) * scale;
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, Buffer.from(positions.buffer));

console.log(
  `${path.basename(inputPath)} -> ${path.basename(outputPath)}: ${count} points, ${positions.byteLength} bytes`,
);
