"use client";
import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import { DATA } from "@/data/resume";

interface HealthData {
    fisica: number | "";
    familiar: number | "";
    financeira: number | "";
    espiritual: number | "";
    social: number | "";
}

const HealthForm: React.FC = () => {
    const [healthData, setHealthData] = useState<HealthData>({
        fisica: "",
        familiar: "",
        financeira: "",
        espiritual: "",
        social: "",
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [showChart, setShowChart] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

        const themeChangeHandler = (e: MediaQueryListEvent) => {
            setIsDarkTheme(e.matches);
        };

        setIsDarkTheme(darkThemeMq.matches);
        darkThemeMq.addEventListener("change", themeChangeHandler);

        return () => {
            darkThemeMq.removeEventListener("change", themeChangeHandler);
        };
    }, []);

    useEffect(() => {
        setChartOptions({
            scales: {
                r: {
                    min: 0,
                    max: 10,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                        color: "darkgray",
                    },
                    grid: {
                        color: "darkgray",
                    },
                    angleLines: {
                        color: "darkgray",
                    },
                },
            },
            plugins: {
                legend: {
                    labels: {
                        color: "darkgray",
                        font: {
                            size: 20,
                        },
                        boxWidth: 10,
                    },
                    background: {
                        color: isDarkTheme ? "black" : "white",
                    },
                },
            },
        });
    }, [isDarkTheme]);

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
        setShowChart(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { fisica, familiar, financeira, espiritual, social } = healthData;
        setIsFormValid(
            fisica !== "" &&
            familiar !== "" &&
            financeira !== "" &&
            espiritual !== "" &&
            social !== ""
        );
        setShowChart(true);
    };

    const data = {
        labels: ["Física", "Familiar", "Financeira", "Espiritual", "Social"],
        datasets: [
            {
                label: "Nível de Saúde",
                data: [
                    healthData.fisica || 0,
                    healthData.familiar || 0,
                    healthData.financeira || 0,
                    healthData.espiritual || 0,
                    healthData.social || 0,
                ],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "darkgray",
                borderWidth: 1,
            },
        ],
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
                        Atribua valores às saúdes
                    </h2>
                    {["fisica", "familiar", "financeira", "espiritual", "social"].map((item) => (
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
                        Veja no gráfico abaixo
                    </button>
                </form>
                {showChart && (
                    <div className="mt-8">
                        <Radar data={data} options={chartOptions} />
                        <a href={"https://api.whatsapp.com/send/?phone=" + DATA.contact.tel + `&text=\nSaúde Física: ${healthData.fisica} \nSaúde Familiar: ${healthData.familiar} \nSaúde Espiritual: ${healthData.espiritual} \nSaúde Social: ${healthData.social}`}>
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
