export interface PostBorrowedBook  {
    book_id:number,
    borrow_date:string,
    return_date:string | null,
}


export interface BorrowedBook  {
    id:number,
    user_id:number,
    book_id:number,
    borrow_date:string,
    return_date:string | null,
    status: "borrowed" | "returned"
    book_title:string,
    cover_image:string
}