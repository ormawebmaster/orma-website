"use client"

import { useState } from "react"
import { MessagesSquare, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const demoMessages = [
    {
        type: "bot",
        message: "Bonjour ! 👋 Bienvenue chez ORMA Swiss SA. Comment puis-je vous aider aujourd'hui ?",
    },
];

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(demoMessages);
    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMessage = { type: "user", message: inputValue };
        setMessages([...messages, userMessage]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            const botResponses = [
                "Merci pour votre message ! Un de nos conseillers vous répondra très bientôt.",
                "Je vous remercie pour votre intérêt. Souhaitez-vous prendre rendez-vous ?",
                "C'est noté ! N'hésitez pas à nous appeler au +41 848 848 849 pour plus d'informations.",
                "Excellente question ! Je transmets votre demande à notre équipe.",
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            setMessages((prev) => [...prev, { type: "bot", message: randomResponse }]);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 bg-red-600 hover:bg-red-700`}
            >
                {isOpen ? (
                    <X className="w-7 h-7 text-white" />
                ) : (
                    <MessagesSquare className="w-7 h-7 text-white" />
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <Card className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] shadow-2xl border-0 overflow-hidden animate-in slide-in-from-bottom-5">
                    {/* Header */}
                    <CardHeader className="bg-primary text-white p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot className="w-6 h-6" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-bold">ORMA Assistant</CardTitle>
                                <p className="text-white/70 text-sm">En ligne • Réponse instantanée</p>
                            </div>
                        </div>
                    </CardHeader>

                    {/* Messages */}
                    <CardContent className="p-4 h-[320px] overflow-y-auto bg-gray-50 space-y-4">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex items-start gap-2 ${msg.type === "user" ? "flex-row-reverse" : ""
                                    }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === "bot" ? "bg-primary" : "bg-red-600"
                                        }`}
                                >
                                    {msg.type === "bot" ? (
                                        <Bot className="w-4 h-4 text-white" />
                                    ) : (
                                        <User className="w-4 h-4 text-white" />
                                    )}
                                </div>
                                <div
                                    className={`max-w-[75%] p-3 rounded-2xl text-sm ${msg.type === "bot"
                                        ? "bg-white shadow-sm text-gray-700 rounded-tl-none"
                                        : "bg-primary text-white rounded-tr-none"
                                        }`}
                                >
                                    {msg.message}
                                </div>
                            </div>
                        ))}
                    </CardContent>

                    {/* Input */}
                    <div className="p-4 bg-white border-t">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Écrivez votre message..."
                                className="flex-1 px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <Button
                                onClick={handleSend}
                                size="icon"
                                className="rounded-full bg-primary hover:bg-primary/90"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground text-center mt-2">
                            Propulsé par ORMA Swiss SA
                        </p>
                    </div>
                </Card>
            )}
        </>
    );
}
