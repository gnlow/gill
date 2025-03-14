const expRand = (lambda: number) =>
    -Math.log(1 - Math.random()) * lambda

export abstract class Gill {
    time = 0

    abstract actions: {
        p: number,
        do(): void,
    }[]

    step() {
        const totalP = this.actions.reduce((a, b) => a + b.p, 0)

        if (totalP == 0) return

        this.time += expRand(1 / totalP)

        const rand = Math.random() * totalP

        let cum = 0
        const action = this.actions.find(action => {
            cum += action.p
            return rand <= cum
        })!

        action.do()
    }

    simulate(n: number) {
        return Array.from({ length: n }, _ => (
            this.step(),
            structuredClone(this)
        ))
    }
}
