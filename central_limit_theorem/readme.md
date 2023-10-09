# Central Limit Theorem Demonstration

This repository contains Python code for demonstrating the Central Limit Theorem (CLT). The CLT states that the distribution of the sum (or average) of a large number of independent, identically distributed random variables approaches a normal distribution, regardless of the shape of the original distribution.

## Code Description

The code simulates dice rolls and calculates the mean of the outcomes for different sample sizes. It then creates histograms to visualize the distribution of means, showcasing the central limit theorem in action.

## Usage

1. Set the `sample` list with the desired sample sizes.
2. Run the code to simulate dice rolls and generate histograms.

```python
sample = [1, 10, 50, 100, 500, 1000]

avg = []
for i in sample:
    np.random.seed(123)
    dice = [np.mean(np.random.randint(1, 7, i)) for _ in range(1000)]
    avg.append(dice)

k = 0
fig, ax = plt.subplots(2, 3, figsize=(8, 8))
for i in range(0, 2):
    for j in range(0, 3):
        ax[i, j].hist(avg[k], 10, density=True, color="royalblue")
        ax[i, j].set_title(label=sample[k])
        k = k + 1

plt.show()
```

Feel free to use, share, and modify the code for your educational purposes. If you find any issues or have suggestions for improvement, please open an issue.
