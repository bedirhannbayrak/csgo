import React from 'react';


class MatchList extends React.Component {

    constructor() {
        super();
        this.state = {
            showContent: true
        }
    }


    showMore = () => {
        this.setState({ showContent: !this.state.showContent })
    }

    render() {
        return (
            <div className="row">

                {this.props.matches.map((match, i) => (

                    <div className="col-lg-4" key={i}>
                        <div className="btn  mb-4 shadow-sm"  onClick={this.showMore}>test
                            </div>
                        <div className="card-body">
                            <h5 className="card-title">{match.event}</h5>
                            <p className="card-text">{match.team1.name}</p>
                            <div className="d-flex justify-content-between align-items-center">                           
                            </div>
                        </div>
                        
                        {
                            this.state.showContent ? (
                                
                                    <div className="d-flex justify-content-between align-items-center">


                                        <h2><span className="badge badge-info">{match.maps}</span></h2>
                                    </div>
                                
                            ) : null

                        }

                    </div>


                ))}

            </div>
        )
    }
}

export default MatchList;