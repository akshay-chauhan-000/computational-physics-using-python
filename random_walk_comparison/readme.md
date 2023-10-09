# Random Walks Comparison

This repository contains Python code for simulating and comparing unbiased and biased random walks in one dimension.

## Unbiased Random Walk

The code `randomwalk1D(n)` generates a 1D random walk of `n` steps. The walker starts at position 0 and takes steps of either +1 or -1 with equal probability at each step.

```python
xplot = randomwalk1D(200)
plt.plot(xplot)
```

## Biased Random Walk

The code also contains an implementation of a biased random walk. In this case, the walker takes steps of +1 or -1, but with probabilities of 1/3 and 2/3, respectively.

```python
xplot = randomwalk1D(200)
plt.plot(xplot)
```

## Comparison

To compare unbiased and biased random walks, I simulated multiple random walks (specified by `num_walks`) with a fixed number of steps (`N`). I then computed the final positions for each walk and plot a histogram.

```python
N = 1000  # Number of steps
num_walks = 10000  # Number of random walks

# Generate random steps (+1 or -1) for each walk
steps = np.random.choice([-1, +1], size=(num_walks, N))

# Compute the final position of each walk by summing the steps
positions = np.cumsum(steps, axis=1)

# Plot the histogram of the final positions
plt.hist(positions[:, -1], bins=50, density=True, alpha=0.5, edgecolor='k')
plt.show()
```
