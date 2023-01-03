import React, { useState } from 'react'
import Button from '../../component/Button/Button'

export default function Home() {
    const [isStudentLogin, setIsStudentLogin] = useState<boolean>(true)

    return (
        <div>
            <Button
                color="secondary"
                onclick={() => setIsStudentLogin((prev) => !prev)}
            >
                {isStudentLogin ? 'Student Login' : 'Instructor Login'}
            </Button>
            <div className="flex flex-row"></div>
        </div>
    )
}
