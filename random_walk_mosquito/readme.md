# Random Walk Mosquito Simulation

This Python code simulates the random walk of a mosquito. The mosquito takes a series of steps in random directions, creating a trajectory. 
The simulation visualizes the movement of the mosquito over a specified number of steps.

## Function: `mosquito_random_walk(steps, step_size)`

This function generates random walk coordinates for the mosquito.

- **Parameters**:
  - `steps`: Total number of steps the mosquito will take.
  - `step_size`: The distance covered in each step.

- **Returns**:
  - `x`: Array of x-coordinates representing the mosquito's position in the x-direction after each step.
  - `y`: Array of y-coordinates representing the mosquito's position in the y-direction after each step.

## Example Usage:

```python
xcoord, ycoord = mosquito_random_walk(1000, 0.1)
```

## Animation:

The code also includes an animation to visualize the mosquito's movement. It uses Matplotlib to create an animated plot that shows the path taken by the mosquito.

Happy simulating!
