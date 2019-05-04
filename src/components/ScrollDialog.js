import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class ScrollDialog extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt={this.props.title}></img>
        <br />
        {this.props.title}

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.description}
              <br />
              使用技術
                <ul>
                {this.props.techs.map((tech, index) => {
                  return (
                    <li key={this.props.id + "-" + index}>{tech}</li>
                  )
                })}
              </ul>
              関連リンク
                <ul>
                {this.props.url && <li><a href={this.props.url} target="_blank">サイトを見る</a></li>}
                <li><a href={"https://github.com/f-teruhisa/" + this.props.github} target="_blank">Github</a></li>
              </ul>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              閉じる
            </Button>
          </DialogActions>
        </Dialog>
        <br />
        <Button onClick={this.handleClickOpen('paper')} style={{ backgroundColor: 'rgb(202, 241, 228)' }}>>> 詳しく見る</Button>
      </div >
    );
  }
}

export default ScrollDialog;
