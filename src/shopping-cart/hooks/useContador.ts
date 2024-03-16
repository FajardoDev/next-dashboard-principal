"use client";
import { useState } from "react";

export const useContador = (valorIncial = 0) => {
	const [counter, setCounter] = useState(valorIncial);

	const incrementar = (valor = 1) => {
		// setCounter(counter + 1);
		setCounter(counter + valor);
	};
	const decrementar = (valor = 1) => {
		// setCounter(counter - 1);
		if (counter <= 0) return;
		setCounter(counter - valor);
	};
	const reset = () => {
		setCounter(valorIncial);
	};

	return {
		counter,
		incrementar,
		decrementar,
		reset,
	};
};
