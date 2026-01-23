
import { CommitsGrid } from "./ui/commits-grid"

import { AppleStyleDock } from "./AppleStyleDock"

const CommitsGridDemo = () => {
    return (
        <>
            <CommitsGrid text="the end" className="max-w-4xl" />
            <AppleStyleDock />
        </>
    )
}

export { CommitsGridDemo }
