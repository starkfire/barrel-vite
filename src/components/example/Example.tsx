import { AnotherExample } from "@/shared/ui/AnotherExample"
import type { Template } from "@/shared/types"

export type SomeType = {
    name: string;
    label: string;
    template: Template;
}

export function ExampleComponent() {
    return (
        <>
            <p>Example Component</p>;
            <AnotherExample />
        </>
    )
}
