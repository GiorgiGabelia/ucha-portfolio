import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

interface TypeLine {
  fullText: string;
  rendered: string;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('container', { static: true })
  container!: ElementRef<HTMLDivElement>;

  lines: TypeLine[] = [
    {
      fullText:
        'A product designer helping teams <br class="min-[1024px]:hidden"> turn <br class="max-[1024px]:hidden"> ideas into digital products.',
      rendered: ''
    },
    {
      fullText:
        ' I create <br class="max-[1024px]:hidden"> interfaces and experiences <br class="min-[1024px]:hidden">',
      rendered: ''
    },
    {
      fullText:
        ' that <br class="max-[1024px]:hidden"> drive growth and delight users.',
      rendered: ''
    }
  ];

  typingSpeed = 45;
  pauseBetweenLines = 30;

  ngAfterViewInit(): void {
    this.typeLine(0, 0);
  }

  private typeLine(
    lineIndex: number,
    tokenIndex: number,
    charIndex: number = 0
  ): void {
    if (lineIndex >= this.lines.length) return;

    const line = this.lines[lineIndex];

    if (!('tokens' in line)) {
      (line as any).tokens = this.tokenize(line.fullText);
      line.rendered = '';
    }

    const tokens = (line as any).tokens;

    if (tokenIndex >= tokens.length) {
      setTimeout(() => {
        this.typeLine(lineIndex + 1, 0);
      }, this.pauseBetweenLines);
      return;
    }

    const token = tokens[tokenIndex];

    if (token.startsWith('<')) {
      line.rendered += token;
      setTimeout(() => {
        this.typeLine(lineIndex, tokenIndex + 1);
      }, this.typingSpeed);
      return;
    }

    line.rendered += token.charAt(charIndex);

    if (charIndex < token.length - 1) {
      setTimeout(() => {
        this.typeLine(lineIndex, tokenIndex, charIndex + 1);
      }, this.typingSpeed);
    } else {
      setTimeout(() => {
        this.typeLine(lineIndex, tokenIndex + 1);
      }, this.typingSpeed);
    }
  }


  private tokenize(input: string): string[] {
    return input.match(/(<[^>]+>|[^<]+)/g) ?? [];
  }

}
