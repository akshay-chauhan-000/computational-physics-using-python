# 2D Ising Model Simulation

This code simulates a 2D Ising model, a simple mathematical model in statistical mechanics used to study phase transitions in materials science. In this model, each lattice site has a spin that can be either up (+1) or down (-1), arranged in a two-dimensional grid.

## Code Overview

### Functions:

1. `initialize_spin_lattice(N)`: Initializes a square lattice of spins of size `NxN` with random up or down orientations.

2. `calculate_energy(spin_lattice)`: Calculates the total energy of the lattice based on the Ising model Hamiltonian.

3. `metropolis(spin_lattice, beta)`: Implements a single step of the Metropolis algorithm to update the lattice configuration based on the energy change.

4. `calculate_magnetization(spin_lattice)`: Calculates the total magnetization of the lattice.

5. `correlation_function(spin_lattice)`: Computes the spin-spin correlation function, which describes how spins at different points are correlated.

### Simulation Parameters:

- `N`: Size of the lattice (NxN).
- `n_steps`: Number of Monte Carlo steps in the simulation.
- `beta`: Inverse temperature parameter.

### Running the Simulation:

1. Initialize the lattice.
2. Perform a series of Metropolis steps to update the lattice configuration.
3. Collect data for analysis and plotting.

## Usage:

1. Set the simulation parameters (`N`, `n_steps`, `beta`) according to your requirements.
2. Run the code to perform the simulation.

## Output:

1. Energy convergence plot: Shows how the energy of the system evolves over the Monte Carlo steps.

2. Spin configuration animation: Visualizes the evolving spin configuration over time using quiver plots. Uncomment the last line to save the animation as a GIF.
