export interface Books {
    id:number,
    category_id:number,
    author:string,
    book_title:string,
    isbn:string,
    description?:string,
    cover_image?:string,
    pdf_url?:string,
    year_published:number,
    publisher:string,
    status: "available" | "borrowed" ,
    category_name:string,
}