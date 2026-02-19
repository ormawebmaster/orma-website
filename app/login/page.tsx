'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Lock } from 'lucide-react'

export default function LoginPage() {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === 'orma') {
            Cookies.set('auth', 'true', { expires: 7 })
            router.push('/')
            router.refresh()
        } else {
            setError('Mot de passe incorrect')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
                <div className="flex flex-col items-center mb-8">
                    <Image
                        src="/logo-orma-1948.png"
                        alt="ORMA Logo"
                        width={120}
                        height={48}
                        className="mb-6"
                    />
                    <h1 className="text-2xl font-bold text-gray-900 text-center">
                        Accès restreint
                    </h1>
                    <p className="text-gray-500 text-center mt-2">
                        Veuillez entrer le mot de passe pour accéder au site.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="password"
                                placeholder="Mot de passe"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setError('')
                                }}
                                className="pl-10 h-12 text-lg"
                                autoFocus
                            />
                        </div>
                        {error && (
                            <p className="text-[#CC2A3F] text-sm mt-2 text-center font-medium">
                                {error}
                            </p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 bg-[#CC2A3F] hover:bg-[#b02536] text-white text-lg font-medium rounded-lg transition-colors"
                    >
                        Valider
                    </Button>
                </form>
            </div>
        </div>
    )
}
