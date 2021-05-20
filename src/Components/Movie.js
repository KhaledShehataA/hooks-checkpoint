import React, { Component } from 'react'

export class Movie extends Component {
    render() {
        return (
            <div className='col-4 mt-2'>
			<Card style={{ height: `500px` }}>
				<CardTitle>
					<div className='row justify-content-center mt-2'>
						<h6>{title}</h6>
					</div>
				</CardTitle>
				<CardImg
					top
					width='100%'
					style={{ height: `300px` }}
					src={posterUrl}
					alt='Card image cap'
				/>
				<CardBody>
					<div className='row'>
						<CardText>{description}</CardText>
					</div>
				</CardBody>
				<div>
					<Link to={'/movie/' + id}>Go back to Movies List...</Link>
				</div>
			</Card>
		</div>
        )
    }
}

export default Movie
