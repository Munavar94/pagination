import React from 'react'

const Pagination = ({data, pageHandler}) => {
    let pageNumber = [];    // 1,2,3,....10
    for(let i = 1; i < Math.ceil(data.length/10)+1; i++) {
        pageNumber.push(i);
    };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        {
            pageNumber.map((page) => (
                <button 
                    onClick={() => pageHandler(page)}
                    style={{ marginRight: '10px'}}
                >{page}</button>
            ))
        }
    </div>
  )
}

export default Pagination;
