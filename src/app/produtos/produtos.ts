export interface IProduto{
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
}

export const produtos = [
    {id: 1, descricao: 'Mouse gamer', preco: 439.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/mouse-3.jpg'},
    {id: 2, descricao: 'Monitor muito bom', preco: 1200.50, descricaoPreco: 'A vista no PIX', desconto: 2000.00, imagem: '/assets/monitor-1.jpg'},
    {id: 3, descricao: 'Teclado excelente', preco: 749.99, descricaoPreco: 'A vista no PIX', imagem: '/assets/teclado-1.jpg'},
    {id: 4, descricao: 'Fone para quem joga FPS', preco: 599.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/fone-de-ouvido-2.jpg'},
    {id: 5, descricao: 'Fone de ouvido', preco: 299.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/fone-de-ouvido-1.jpg'},
    {id: 6, descricao: 'Fone de ouvido bom', preco: 399.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/fone-de-ouvido-3.jpg'},
    {id: 7, descricao: 'HD 1TB', preco: 499.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/hd.jpg'},
    {id: 8, descricao: 'Combo de palca de video', preco: 18449.99, descricaoPreco: 'A vista no PIX', imagem: '/assets/placa-video.jpg'},
    {id: 9, descricao: 'Processador Ryzen', preco: 1000.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/processador.jpg'},
    {id: 10, descricao: 'Notebook bom', preco: 2500.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/laptop-1.jpg'},
    {id: 11, descricao: 'Notebook excelente', preco: 4500.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/laptop-2.jpg'},
    {id: 12, descricao: 'Mouse barato', preco: 20.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/mouse-1.png'},
    {id: 13, descricao: 'Mouse ótimo', preco: 200.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/mouse-2.jpg'},
    {id: 14, descricao: 'Mouse pequeno', preco: 50.00, descricaoPreco: 'A vista no PIX', imagem: '/assets/mouse-4.jpg'},
    {id: 15, descricao: 'Teclado bom', preco: 159.99, descricaoPreco: 'A vista no PIX', imagem: '/assets/teclado-2.jpg'}
];