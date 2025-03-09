export interface BorrowedBook  {
    user_id:number,
    book_id:number,
    borrow_date:string,
    return_date:string | null,
}