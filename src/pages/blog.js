export default function Tentang() {
    return (
        <main>
            <h1>
                Ini Halaman Tentang
            </h1>
            <br />
            <hr />
            <ul>
                {BLOGS.map((post, i) => (
                    <li key={i}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

const BLOGS = [
    {
        title: 'Blog 1',
        date: '2002-01-01',
        content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        title: 'Blog 2',
        date: '2002-01-01',
        content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        title: 'Blog 2',
        date: '2002-01-01',
        content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
]