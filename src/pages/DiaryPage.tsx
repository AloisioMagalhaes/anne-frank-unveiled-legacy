
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/common/PageHeader";
import AudioPlayer from "@/components/common/AudioPlayer";

interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  audioSrc?: string;
  theme: "daily-life" | "thoughts" | "hopes-dreams";
}

const diaryEntries: DiaryEntry[] = [
  {
    id: "entry-1",
    date: "Domingo, 12 de julho de 1942",
    title: "Primeiros Dias no Anexo Secreto",
    excerpt: "O Anexo é um lugar ideal para se esconder. Pode ser úmido e torto, mas provavelmente não há um esconderijo mais confortável em toda Amsterdã. Não, em toda a Holanda. Nosso pequeno quarto parecia muito vazio no início, sem nada nas paredes; mas graças ao Papai que havia trazido minha coleção de estrelas de cinema e cartões postais antecipadamente, e com a ajuda de cola e pincel, transformei as paredes em uma enorme figura. Isso faz parecer muito mais alegre.",
    theme: "daily-life"
  },
  {
    id: "entry-2",
    date: "Sexta-feira, 25 de setembro de 1942",
    title: "Conflitos com a Sra. Van Pels",
    excerpt: "A Sra. Van Pels é insuportável. Sou constantemente repreendida por minha conversa incessante quando estou no andar de cima. Eu simplesmente deixo as palavras saltarem de mim! Madame agora tem um novo truque: tentar escapar de lavar as panelas. Se houver um pouco de comida no fundo da panela, ela a deixa estragar em vez de transferi-la para um prato de vidro. Então, à tarde, quando Margot está encarregada de limpar todas as panelas, Madame exclama: 'Oh, pobre Margot, você tem tanto trabalho a fazer!'",
    theme: "daily-life"
  },
  {
    id: "entry-3",
    date: "Sábado, 7 de novembro de 1942",
    title: "Pensamentos sobre Minha Mãe",
    excerpt: "Estou fervendo de raiva, mas não posso demonstrar. Gostaria de bater os pés, gritar, dar uma boa sacudida na Mãe, chorar e não sei o que mais por causa das palavras horríveis, olhares zombeteiros e acusações que ela me lança repetidamente, dia após dia. Palavras que me cortam e que sei que alcançam o oposto do que deveriam. Sei que estou longe de ser o que deveria, mas adquiri uma coisa: minhas próprias opiniões teimosas.",
    theme: "thoughts"
  },
  {
    id: "entry-4",
    date: "Quarta-feira, 13 de janeiro de 1943",
    title: "Medo de Descoberta",
    excerpt: "Coisas terríveis estão acontecendo lá fora. A qualquer hora da noite e do dia, pobres pessoas indefesas são arrancadas de suas casas. Só podem levar uma mochila e um pouco de dinheiro, e mesmo assim, são roubados desses pertences no caminho. Famílias são separadas; homens, mulheres e crianças são separados. Crianças voltam da escola para descobrir que seus pais desapareceram. Todos estão com medo.",
    theme: "thoughts"
  },
  {
    id: "entry-5",
    date: "Sexta-feira, 14 de abril de 1944",
    title: "Sonhos com a Natureza",
    excerpt: "Anseio por andar de bicicleta, dançar, assobiar, olhar o mundo, sentir-me jovem e saber que sou livre, e mesmo assim não posso demonstrar. Imagine o que aconteceria se todos nós oito nos sentíssemos mal por nós mesmos ou andássemos com o descontentamento claramente visível em nossos rostos. Onde isso nos levaria? Às vezes me pergunto se alguém jamais entenderá o que quero dizer, se alguém ignorará minha ingratidão e não se preocupará se sou judia ou não, e simplesmente me verá como uma adolescente que precisa desesperadamente de alguma diversão normal.",
    theme: "hopes-dreams"
  },
  {
    id: "entry-6",
    date: "Terça-feira, 11 de abril de 1944",
    title: "Aspirações como Escritora",
    excerpt: "Você sabe há muito tempo que meu maior desejo é me tornar jornalista algum dia e mais tarde uma escritora famosa. Se essas inclinações para a grandeza (ou insanidade) algum dia se materializarão, resta a ser visto, mas certamente tenho os assuntos em mente. De qualquer forma, quero publicar um livro intitulado Het Achterhuis após a guerra. Se terei sucesso ou não, não posso dizer, mas meu diário será de grande ajuda.",
    theme: "hopes-dreams"
  }
];

const DiaryPage = () => {
  const [selectedTab, setSelectedTab] = useState<string>("daily-life");
  
  const filteredEntries = diaryEntries.filter(entry => entry.theme === selectedTab);

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="Diário de Anne" 
        subtitle="Trechos selecionados do diário de Anne Frank, revelando seus pensamentos, experiências e sonhos"
      />
      
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-anne-gray-light/30">
        <h2 className="font-serif text-xl font-semibold mb-4">Sobre o Diário de Anne</h2>
        <p className="text-anne-gray-dark mb-4">
          Anne Frank recebeu seu diário como presente em seu décimo terceiro aniversário em 12 de junho de 1942. 
          Ela o nomeou 'Kitty' e escreveu entradas até 1º de agosto de 1944, apenas dias antes do 
          Anexo Secreto ser descoberto. Seu diário fornece um relato íntimo de seu tempo em 
          esconderijo, sua adolescência em desenvolvimento e suas observações sobre a natureza humana.
        </p>
        <p className="text-anne-gray-dark">
          Após a guerra, Otto Frank, pai de Anne e único sobrevivente do Anexo Secreto, 
          publicou o diário. Anne havia reescrito muitas de suas entradas depois de ouvir no 
          rádio que o governo holandês queria coletar relatos de testemunhas oculares da ocupação 
          nazista, com a intenção de que seu diário fosse publicado após a guerra.
        </p>
      </div>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="daily-life" className="font-serif">Vida Cotidiana</TabsTrigger>
          <TabsTrigger value="thoughts" className="font-serif">Pensamentos & Reflexões</TabsTrigger>
          <TabsTrigger value="hopes-dreams" className="font-serif">Esperanças & Sonhos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="daily-life" className="animate-fade-in">
          <div className="space-y-8">
            {filteredEntries.map(entry => (
              <div key={entry.id} className="diary-entry">
                <div className="mb-4 text-anne-sepia font-medium">{entry.date}</div>
                <h3 className="text-xl mb-3">{entry.title}</h3>
                <p className="text-lg mb-4">{entry.excerpt}</p>
                {entry.audioSrc && (
                  <AudioPlayer 
                    src={entry.audioSrc} 
                    title={`Áudio: ${entry.title}`}
                    className="mt-4"
                  />
                )}
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="thoughts" className="animate-fade-in">
          <div className="space-y-8">
            {filteredEntries.map(entry => (
              <div key={entry.id} className="diary-entry">
                <div className="mb-4 text-anne-sepia font-medium">{entry.date}</div>
                <h3 className="text-xl mb-3">{entry.title}</h3>
                <p className="text-lg mb-4">{entry.excerpt}</p>
                {entry.audioSrc && (
                  <AudioPlayer 
                    src={entry.audioSrc} 
                    title={`Áudio: ${entry.title}`}
                    className="mt-4"
                  />
                )}
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="hopes-dreams" className="animate-fade-in">
          <div className="space-y-8">
            {filteredEntries.map(entry => (
              <div key={entry.id} className="diary-entry">
                <div className="mb-4 text-anne-sepia font-medium">{entry.date}</div>
                <h3 className="text-xl mb-3">{entry.title}</h3>
                <p className="text-lg mb-4">{entry.excerpt}</p>
                {entry.audioSrc && (
                  <AudioPlayer 
                    src={entry.audioSrc} 
                    title={`Áudio: ${entry.title}`}
                    className="mt-4"
                  />
                )}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DiaryPage;
