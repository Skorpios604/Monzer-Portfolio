
import { CommitsGrid } from "./ui/commits-grid"
import OrbitingSkills from "./ui/orbiting-skills"


import { AppleStyleDock } from "./AppleStyleDock"

const CommitsGridDemo = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8">
            <OrbitingSkills />
            <CommitsGrid text="cosmicray23@hotmail.com" className="w-full max-w-7xl" />
            <CommitsGrid text="6043296939" className="w-[44%] max-w-3xl" />
            <AppleStyleDock />
        </div>
    )
}

export { CommitsGridDemo }
