import { useForm } from "react-hook-form"
import { usePostBookMutation } from "../../redux/Features/Books/booksApi";

interface IBook {
    title: string;
    pages: number;
    releaseDate: string;
    isbn: string;
}

export default function AddBook() {

    const { register, handleSubmit } = useForm()

    const [postBook] = usePostBookMutation()

    const onSubmit = (data: IBook) => {


        postBook(data)
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input {...register('title', { required: true })} type="text" placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pages</span>
                            </label>
                            <input {...register('pages', { required: true })} type="text" placeholder="pages" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Release Date</span>
                            </label>
                            <input {...register('releaseDate', { required: true })} type="text" placeholder="releaseDate" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ISBN</span>
                            </label>
                            <input {...register('isbn', { required: true })} type="text" placeholder="isbn" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-outline btn-[#12A9B2] rounded-md text-[#12A9B2] hover:bg-[#12A9B2] hover:border-[#12A9B2] mb-3 me-4">Add Book</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
