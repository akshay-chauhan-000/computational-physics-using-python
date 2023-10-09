# Monte Carlo Estimation of Pi

This repository contains Python code for estimating the value of Pi using a Monte Carlo simulation. The Monte Carlo method is a statistical technique that uses random sampling to obtain numerical results.

## Code Description

The code `pieee(n)` generates a 2D array `x` of size `n` where each row contains:

1. Two random numbers between 0 and 1.
2. The Euclidean norm (L2-norm) of the two random numbers.
3. A counter that keeps track of how many points fall within the unit circle.
4. An approximation of Pi using the Monte Carlo method.

The code then plots the approximated value of Pi and the percentage error vs. the number of iterations.

## Usage

```python
n = 100000  # Set the number of iterations
x = pieee(n)  # Run the Monte Carlo simulation

# Pi value obtained using Monte Carlo method
pi = 2 * np.arcsin(1)

# Calculate the error
error_percent = (x[:, 3] - pi) * 100

# Plot the results
# ...
```

## Results

The first plot shows how the approximated value of Pi converges with increasing iterations. The second plot displays the percentage error.

