import './PaginateButton.css'

export const PaginateButton = ({data, page,setPage})=>{

    return(
        <div className="archive-page-paginate">
            <button className='last-prev' onClick={()=>setPage(1)} ><i class="ri-arrow-left-double-line"  ></i></button>
            <button className={`${page <= 1? 'btn-disable':''}`} onClick={()=>setPage(page - 1)}><i className="ri-arrow-left-s-line"></i></button>
            <button className={`${page >= 500 || page >= data?.total_pages ? 'btn-disable':''}`} onClick={()=>setPage(page + 1)} ><i className="ri-arrow-right-s-line"></i></button>
            <button className='last-next' onClick={()=>{
                data?.total_pages > 500 ? setPage(500) : setPage(data?.total_pages)
                
            }}><i className="ri-arrow-right-double-line"></i></button>
        <p className='page-number'>{page}... of {data?.total_pages}</p>
        </div>
    )
}