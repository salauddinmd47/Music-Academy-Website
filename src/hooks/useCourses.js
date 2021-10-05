import { useEffect, useState } from "react"

const useCourses= ()=>{
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[courses])
    return [courses]
}
 
export default useCourses;
