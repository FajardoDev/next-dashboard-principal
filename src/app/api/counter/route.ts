// Métodos HTTP admitidos
// Se admiten los siguientes métodos HTTP: GET, POST, PUT, PATCH, DELETE, HEAD y OPTIONS. Si se llama a un método no compatible, Next.js devolverá una respuesta 405 Método no permitido.

import { NextResponse } from "next/server";

export async function GET(request: Request) {
	// console.log({ method: request.method });

	return NextResponse.json({
		method: "GET",
		count: 100,
	});
}
export async function POST(request: Request) {
	// console.log({ method: request.method });

	return NextResponse.json({
		method: "POST",
		count: 100,
	});
}
