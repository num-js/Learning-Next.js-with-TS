export default function Docs({ params }: { params: { slug: string[] } }) {

    if (params.slug?.length == 1) {
        return (<div>Doc for Feature <b>{params.slug[0]}</b> </div>)
    } else if (params.slug?.length == 2) {
        return (<div>Doc for Feature <b>{params.slug[0]}</b> and Concept <b>{params.slug[1]}</b> </div>)
    } else if (params.slug?.length == 3) {
        return (<div>Doc for Feature <b>{params.slug[0]}</b> and Concept <b>{params.slug[1]}</b> and Example <b>{params.slug[2]}</b> </div>)
    }

    return (
        <div>
            <h1>Docs Home Page</h1>
        </div>
    )
}
