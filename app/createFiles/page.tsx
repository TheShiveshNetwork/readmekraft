import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allCreateLinks } from "@/constants";
import { Metadata } from "next";
import Link from "next/link";

type Props = {}

export const metadata: Metadata = {
    title: "Customize your Github for Free",
    description: "Transform your GitHub projects with stunning, informative, and professional READMEs. Elevate your code today!",
};

const CreateFiles = (props: Props) => {

    return (
        <div className="lg:mx-40 md:mx-20 mx-10 mt-10">
            <h2 className="text-4xl font-semibold">Create </h2>
            <p className="text-lg">
                Create the different files from the given list.
            </p>
            <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
                {allCreateLinks.map((item) => (
                    <Link key={item.href} href={item.href}>
                    <Card className="dark:bg-slate-950">
                        <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                    </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CreateFiles