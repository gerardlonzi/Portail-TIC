
import AuthLoader from '@/shared/AuthLoader'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AuthLoader>

                    {
                        children
                    }

            </AuthLoader>
        </div>
    )
}

export default layout