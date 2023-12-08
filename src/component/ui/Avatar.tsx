import { useGetAuthorsQuery } from "../../redux/Features/Authors/authorsApi";

interface IAuthor {
    id: number;
    name: string;
    surname: string
}

export default function Avatar() {
    const { data = [] } = useGetAuthorsQuery(undefined)
    console.log(data);

    return (
        <div>
            <div className="grid grid-cols-4 w-[600px] m-auto mt-10">
                {
                    data.map((author: IAuthor) => <div key={author.id}>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="text-[#12A9B2] text-xl ">{author.name}</div>
                    </div>)
                }
            </div>
        </div>
    )
}
