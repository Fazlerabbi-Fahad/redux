import { useParams } from "react-router-dom"
import { useGetBookQuery } from "../../redux/Features/Books/booksApi"

export default function Book() {
    const { id } = useParams()

    const { data } = useGetBookQuery(id)

    console.log(data);

    return (
        <div
            className="card bg-base-100 shadow-xl"
        >
            <figure>
                <img
                    src={data?.cover_image}
                    alt={data?.title}
                    className="h-[255.5px] w-auto"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data?.title}</h2>
                <p>Pages: {data?.pages}</p>
                <p>Release Date: {data?.releaseDate}</p>
                <p>ISBN: {data?.isbn}</p>
            </div>
        </div>
    )
}
