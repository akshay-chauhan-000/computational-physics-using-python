# Bead-Spring Model Generator

## Overview

The bead-spring model is a simple computational model used to simulate polymer chains. In this model, a polymer chain is represented as a series of beads (representing monomers) connected by springs. The beads experience random thermal motion and are subject to certain constraints, such as bond length and persistence length.

This code generates a bead-spring model in 3D space, incorporating persistence length and minimum bead-to-bead distance constraints. The model allows for the simulation of a single polymer chain with a variable number of monomer beads.

## Usage

To generate a bead-spring model, you can use the `generate_single_chain_model` function in Python. Here's an example of how to use it:

```python
import numpy as np

# Set parameters
chain_length = 50
persistence_length = 1.02
min_distance = 2.5

# Generate bead-spring model
bead_positions_single_chain = generate_single_chain_model(chain_length, persistence_length, min_distance)
```

## Code Explanation

### `generate_single_chain_model`

This function generates a bead-spring model for a single polymer chain. It takes the following parameters:

- `chain_length`: The number of monomer beads in the chain.
- `persistence_length`: The persistence length of the polymer chain, which affects the curvature and flexibility.
- `min_distance`: The minimum distance allowed between any two beads.

The function proceeds as follows:

1. Initialize bead positions with zeros.
2. Loop over the monomer beads (from 1 to `chain_length`).
3. Generate spherical coordinates to represent the random thermal motion of the beads.
4. Convert spherical coordinates to Cartesian coordinates.
5. Calculate the new bead position based on random motion and previous position.
6. Check persistence length condition and adjust position if necessary.
7. Check minimum distance condition and adjust position if necessary.

The function returns a 2D array of bead positions with shape `(chain_length, 3)`.
