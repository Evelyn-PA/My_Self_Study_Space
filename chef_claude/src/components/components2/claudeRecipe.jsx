import ReactMarkdown from 'react-markdown'
export default function Recipe(props) {
    return (
        <section> 
            <h2 style={{ fontSize: "1.5rem" }}>Recommended Recipe</h2>
            <ReactMarkdown className='ai-recommend' >
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}