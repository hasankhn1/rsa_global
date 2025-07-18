import Status from "@/components/Status";

export default async function status(props) {
    const { id } = await props.params;
    return (
        <Status id={id} />
    )
}