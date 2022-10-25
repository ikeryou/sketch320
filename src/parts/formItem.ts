import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";

// -----------------------------------------
//
// -----------------------------------------
export class FormItem extends MyDisplay {

  private _con:HTMLElement;
  private _input:any;

  constructor(opt:any) {
    super(opt)

    this._con = this.qs('.con');
    this.addClass('s-gpu');

    this._input = this.qs('input');

    // const col = Util.instance.randomArr(Conf.instance.COLOR);

    // if(Util.instance.hit(5)) {
    //   Tween.instance.set(this._input, {
    //     backgroundColor:new Color(1 - col.r, 1 - col.g, 1 - col.b).getStyle(),
    //     color:col.getStyle(),
    //   })
    // } else {
    //   Tween.instance.set(this._input, {
    //     color:new Color(1 - col.r, 1 - col.g, 1 - col.b).getStyle(),
    //     backgroundColor:col.getStyle(),
    //   })
    // }

    this._resize();
  }

  public setRate(r:number): void {
    // let txt = '';
    // const num = ~~(r * 20);
    // for(let i = 0; i < num; i++) {
    //   txt += Util.instance.randomArr('ABCDEFGHIKLMNOPRSTUVWXYZ0123456789'.split(''));
    // }

    this._input.value = r * 100;
  }

  public setSize(size:number): void {
    Tween.instance.set(this.getEl(), {
      width: size,
    })

    Tween.instance.set(this._con, {
      width: size,
      x:-size * 0.5,
    })
  }

  protected _update(): void {
    super._update();
  }

  protected _resize(): void {
    super._resize();
  }
}