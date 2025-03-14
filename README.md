# gill
small library for gillespie algorithm

```ts
import { Gill } from "https://esm.sh/gh/gnlow/gill/mod.ts"

class SIR extends Gill {
    beta = 0.3
    gamma = 0.1
    N = 1000
    S = 999
    I = 1
    R = 0

    get actions() {
        const { beta, gamma, N, S, I } = this
        return [
            {
                p: beta * S * I / N,
                do: () => {
                    this.S -= 1
                    this.I += 1
                }
            },
            {
                p: gamma * I,
                do: () => {
                    this.I -= 1
                    this.R += 1
                }
            }
        ]
    }
}

const model = new SIR()

const result = model.simulate(10000)

result
```
```ts
[
    {
        time: 3.5378019966799426,
        beta: 0.3,
        gamma: 0.1,
        N: 1000,
        S: 998,
        I: 2,
        R: 0,
    },
    // ...
]
```
