import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ learningPathId, course}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/learningPaths/${learningPathId}/courses/${course._courseId}/quizzes`}/>
            {/* <Card.Img src={learningPath.image} variant="top"/> */}
        {/* </a> */}
        <Card.Body>
            <Link to={`/learningPaths/${learningPathId}/courses/${course._courseId}/quizzes`}>
                <Card.Title as='div' className='product-title'>
                    <strong>{course.title}</strong>
                </Card.Title>
            </Link>
        </Card.Body>
    </Card>
  )
}

export default Course
