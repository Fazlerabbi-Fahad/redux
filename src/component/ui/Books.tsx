import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../redux/Features/Books/booksApi";

interface IBooks {
    id: number;
    author_id: number;
    title: string;
    cover_image: string;
    pages: number;
    releaseDate: string;
    isbn: string;
}

export default function Books() {
    const { data } = useGetBooksQuery();

    const limitedData = data ? data.slice(-3) : [];

    return (
        <div className="mt-10">
            <div className="flex justify-end">
                <button className="btn btn-outline btn-[#12A9B2] rounded-md text-[#12A9B2] hover:bg-[#12A9B2] hover:border-[#12A9B2]"><Link to='/books'>View All</Link></button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
                {limitedData.map((book: IBooks) => (
                    <div
                        key={book.id}
                        className="card w-96 bg-base-100 shadow-xl h-[400px]"
                    >
                        <figure>
                            <img
                                src={book.cover_image}
                                alt={book.title}
                                className="h-[255.5px] w-auto"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{book.title}</h2>
                            <p>Pages: {book.pages}</p>
                            <p>Release Date: {book.releaseDate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
