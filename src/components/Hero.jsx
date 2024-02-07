export function Hero() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="mx-auto flex flex-col clipText font-stacker bg-gradient-to-r from-pink via-purple via-blue to-cyan font-black bg-[size:200%] animate-fadeIn">
        <div className="text-5xl">UWB</div>
        <div className="rounded-lg border-2 border-pink">
          <h1 className="text-8xl p-8 animate-glitch">Hacks AI</h1>
        </div>
        <div className="text-5xl self-end">2024</div>
        <div className="text-3xl self-center font-mono">April | UWB ARC</div>
      </div>
    </div>
  );
}
