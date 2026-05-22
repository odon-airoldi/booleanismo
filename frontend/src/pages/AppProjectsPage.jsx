export default function AppProjectsPage() {

    fetch('http://localhost:3000/projects/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    return (

        <div>

        </div>
    )

}