export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <img 
      className="w-[300px] rounded-[10px] mb-[3px]"
      src={content.img} alt={content.title} />
      <span className="text-xs text-[#d7fa00;] border border-[#d7fa00] px-[4px] py-[5px] rounded-[3px]">모집중</span>
      <div className="text-lg text-semibold">{content.title}</div>
      <p className="text-xs text-[rgb(160, 160, 160)]">{content.subtitle}</p>
    </div>
  );
}
