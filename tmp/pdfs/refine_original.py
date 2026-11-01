import pymupdf as fitz
src='public/hritvik-dinkar-resume-v3.pdf'
out='output/pdf/hritvik-dinkar-resume-refined.pdf'
d=fitz.open(src); p=d[0]
fonts={'ArialMT':'OriginalRegular','Arial-BoldMT':'OriginalBold'}
fontpaths={'ArialMT':'/System/Library/Fonts/Supplemental/Arial.ttf','Arial-BoldMT':'/System/Library/Fonts/Supplemental/Arial Bold.ttf'}
for name,key in fonts.items(): p.insert_font(fontname=key,fontfile=fontpaths[name])
changes={
 'Senior Backend / Platform Engineer.':'Backend, GenAI & System Design.',
 'backend platforms across microservices, support automation, GenAI workflows, event-driven systems, data ingestion, and':'backend platforms across Generative AI (GenAI), LLM workflows, distributed systems, microservices, data ingestion, and',
 'Backend':'System Design',
 'GenAI / Platform':'Generative AI',
 'response generation':'response generation, agent loops',
}
spans=[s for b in p.get_text('dict')['blocks'] if 'lines' in b for l in b['lines'] for s in l['spans']]
pending=[]
for s in spans:
 if s['text'] not in changes:continue
 if s['text']=='response generation' and s['bbox'][1]>160:continue
 new=changes[s['text']]; font=fonts[s['font']]; size=s['size']
 width=fitz.Font(fontfile=fontpaths[s['font']]).text_length(new,fontsize=size)
 maxwidth=(195.89-s['bbox'][0]) if s['text'].startswith('Senior Backend') else (77 if s['text'] in ('Backend','GenAI / Platform') else 538)
 assert width<=maxwidth,(new,width,maxwidth)
 p.add_redact_annot(fitz.Rect(s['bbox']),fill=(1,1,1))
 pending.append((s,new,font))
p.apply_redactions(graphics=0)
for s,new,font in pending:
 p.insert_text(s['origin'],new,fontname=font,fontfile=fontpaths[s['font']],fontsize=s['size'],color=tuple(((s['color']>>k)&255)/255 for k in (16,8,0)))
d.save(out,garbage=4,deflate=True)
p.get_pixmap(matrix=fitz.Matrix(1.5,1.5)).save('tmp/pdfs/original-refined.png')
print('Updated',len(pending),'text spans; preserved original page and layout.')
