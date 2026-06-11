# Particle model sources

The particle background uses surface samples generated from models published by the
[Stanford 3D Scanning Repository](https://graphics.stanford.edu/data/3Dscanrep/):

- Stanford Bunny (`bun_zipper_res2.ply`)
- Stanford Armadillo (`Armadillo.ply`)

The browser downloads only the generated point samples, not the original triangle meshes.
The Utah teapot and procedural geometric forms are generated at runtime with Three.js.

The Stanford Dragon is deliberately excluded from the morphing animation. The repository's
usage guidance identifies it as a symbol of Chinese culture and asks users not to animate or
morph it.
