"use client";
import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import { DATA } from "@/data/resume";

interface HealthData {
    fisica: number | "";
    emocional: number | "";
    mental: number | "";
    espiritual: number | "";
    social: number | "";
}

const HealthForm: React.FC = () => {
    const [healthData, setHealthData] = useState<HealthData>({
        fisica: "",
        emocional: "",
        mental: "",
        espiritual: "",
        social: "",
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const validateInput = (value: string): number | "" => {
        const numValue = Number(value);
        if (numValue < 0 || numValue > 10 || isNaN(numValue)) {
            alert("Por favor, insira um valor entre 0 e 10.");
            return "";
        }
        return numValue;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const validatedValue = validateInput(value);
        setHealthData((prevData) => ({
            ...prevData,
            [name]: validatedValue,
        }));
    };

    const checkFormValidity = () => {
        const { fisica, emocional, mental, espiritual, social } = healthData;
        setIsFormValid(
            fisica !== "" && emocional !== "" && mental !== "" && espiritual !== "" && social !== ""
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        checkFormValidity();
    };

    const data = {
        labels: ["Física", "Emocional", "Mental", "Espiritual", "Social"],
        datasets: [
            {
                label: "Nível de Saúde",
                data: [
                    healthData.fisica || 0,
                    healthData.emocional || 0,
                    healthData.mental || 0,
                    healthData.espiritual || 0,
                    healthData.social || 0,
                ],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                min: 0,
                max: 10,
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    color: "hsl(var(--foreground))",
                },
                grid: {
                    color: "rgba(128, 128, 128, 0.2)",
                },
                angleLines: {
                    color: "rgba(128, 128, 128, 0.2)",
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: "hsl(var(--foreground))",
                },
            },
        },
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
            <div
                className="p-8 rounded-lg shadow-lg w-full max-w-3xl"
                style={{
                    backgroundColor: "hsl(var(--card))",
                    color: "hsl(var(--card-foreground))",
                }}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "hsl(var(--primary))" }}>
                        Mapeamento de Nível de Saúde
                    </h2>
                    {["fisica", "emocional", "mental", "espiritual", "social"].map((item) => (
                        <div key={item}>
                            <label htmlFor={item} className="block text-lg mb-2 capitalize">{`Saúde ${item}`}</label>
                            <input
                                type="number"
                                id={item}
                                name={item}
                                min={0}
                                max={10}
                                value={healthData[item as keyof HealthData] || ""}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded bg-[hsl(var(--input))] text-[hsl(var(--foreground))] border-[hsl(var(--border))]"
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full py-2 rounded-full transition duration-300"
                        style={{
                            backgroundColor: "hsl(var(--primary))",
                            color: "hsl(var(--primary-foreground))",
                        }}
                    >
                        Atualizar Gráfico
                    </button>
                </form>
                {isFormValid && (
                    <div className="mt-8">
                        <Radar data={data} options={options} />
                        <a href={"https://api.whatsapp.com/send/?phone=" + DATA.contact.tel + `&text=\nSaúde Emocional: ${healthData.emocional} \nSaúde Física: ${healthData.fisica} \nSaúde Mental: ${healthData.mental} \nSaúde Espiritual: ${healthData.espiritual} \nSaúde Social: ${healthData.social}`}>
                            <button
                                type="button"
                                className="w-full py-2 rounded-full transition duration-300"
                                style={{
                                    backgroundColor: "hsl(var(--primary))",
                                    color: "hsl(var(--primary-foreground))",
                                }}
                            >
                                Enviar no whatsapp
                            </button>
                        </a>
                    </div>

                )}
            </div>
        </div>
    );
};

export default HealthForm;
