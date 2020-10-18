import React, { useState, useEffect, useCallback } from "react";
import ReactPaginate from 'react-paginate';

const SearchPage = (props) => {
    const [state, setState] = useState({
        opportunities: {},
        offset: 0
    });

    const fetchOpportunities = useCallback(
        () => {
            try {
                fetch(`${props.apiUrl}?offset=${state.offset}&size=${props.size}&aggregate=10`, {
                    method: "POST",
                })
                    .then(response => response.json())
                    .then(data => {
                        setState({
                            ...state,
                            opportunities: data.results,
                            pageCount: Math.ceil(data.total / data.size),
                        })
                    })
            }
            catch (error) {
                console.log(error);
            };
        },
        [state.offset],
    );

    const handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * props.size);
        setState({ ...state, offset: offset });
    };

    useEffect(() => {
        fetchOpportunities();
    }, []);

    console.log(state);

    return <div>
        Data ready
    <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
        />
    </div>
}

export default SearchPage;