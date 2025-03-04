// 开源项目，未经作者同意，不得以抄袭/复制代码/修改源代码版权信息。
// Copyright @ 2018-present xiejiahe. All rights reserved.
// See https://github.com/xjh22222228/nav

import { Component, Input, ViewChild, ElementRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ImageProps } from 'src/types'
import { parseHtmlWithContent, parseLoadingWithContent } from 'src/utils/util'
import { SafeHtmlPipe } from 'src/pipe/safeHtml.pipe'

@Component({
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  selector: 'app-side-image',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class SideImageComponent {
  @Input() data: ImageProps = {} as ImageProps
  @ViewChild('root', { static: false }) root!: ElementRef

  isCode = false
  html = ''

  constructor() {}

  ngOnInit() {
    this.isCode = this.data.url[0] === '!'
    if (this.isCode) {
      this.html = parseLoadingWithContent(this.data.url)
    }
  }

  ngAfterViewInit() {
    this.parseDescription()
  }

  private parseDescription() {
    if (this.isCode) {
      parseHtmlWithContent(this.root?.nativeElement, this.data.url)
    }
  }
}
