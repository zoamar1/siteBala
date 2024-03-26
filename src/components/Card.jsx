export default function Card(props){
    return(
        <>
            <div>
                <h2>{props.title}</h2>
                <img src={props.imgSrc} alt={props.title} />
                <p>{props.paragraph}</p>
            </div>
        </>
    )
}